# `dataOciFunctionsPbfListingVersions` Submodule <a name="`dataOciFunctionsPbfListingVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFunctionsPbfListingVersions <a name="DataOciFunctionsPbfListingVersions" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions oci_functions_pbf_listing_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pbf_listing_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciFunctionsPbfListingVersionsFilter]] = None,
  id: str = None,
  is_current_version: typing.Union[bool, IResolvable] = None,
  name: str = None,
  pbf_listing_version_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingId">pbf_listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.isCurrentVersion">is_current_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingVersionId">pbf_listing_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pbf_listing_id`<sup>Required</sup> <a name="pbf_listing_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#filter DataOciFunctionsPbfListingVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_current_version`<sup>Optional</sup> <a name="is_current_version" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.isCurrentVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `pbf_listing_version_id`<sup>Optional</sup> <a name="pbf_listing_version_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion">reset_is_current_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId">reset_pbf_listing_version_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFunctionsPbfListingVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_current_version` <a name="reset_is_current_version" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion"></a>

```python
def reset_is_current_version() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_pbf_listing_version_id` <a name="reset_pbf_listing_version_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId"></a>

```python
def reset_pbf_listing_version_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFunctionsPbfListingVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFunctionsPbfListingVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFunctionsPbfListingVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection">pbf_listing_versions_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput">is_current_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput">pbf_listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput">pbf_listing_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion">is_current_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId">pbf_listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId">pbf_listing_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter"></a>

```python
filter: DataOciFunctionsPbfListingVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a>

---

##### `pbf_listing_versions_collection`<sup>Required</sup> <a name="pbf_listing_versions_collection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection"></a>

```python
pbf_listing_versions_collection: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFunctionsPbfListingVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_current_version_input`<sup>Optional</sup> <a name="is_current_version_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput"></a>

```python
is_current_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pbf_listing_id_input`<sup>Optional</sup> <a name="pbf_listing_id_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput"></a>

```python
pbf_listing_id_input: str
```

- *Type:* str

---

##### `pbf_listing_version_id_input`<sup>Optional</sup> <a name="pbf_listing_version_id_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput"></a>

```python
pbf_listing_version_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_current_version`<sup>Required</sup> <a name="is_current_version" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion"></a>

```python
is_current_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pbf_listing_id`<sup>Required</sup> <a name="pbf_listing_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId"></a>

```python
pbf_listing_id: str
```

- *Type:* str

---

##### `pbf_listing_version_id`<sup>Required</sup> <a name="pbf_listing_version_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId"></a>

```python
pbf_listing_version_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFunctionsPbfListingVersionsConfig <a name="DataOciFunctionsPbfListingVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pbf_listing_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciFunctionsPbfListingVersionsFilter]] = None,
  id: str = None,
  is_current_version: typing.Union[bool, IResolvable] = None,
  name: str = None,
  pbf_listing_version_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId">pbf_listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion">is_current_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId">pbf_listing_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pbf_listing_id`<sup>Required</sup> <a name="pbf_listing_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId"></a>

```python
pbf_listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFunctionsPbfListingVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#filter DataOciFunctionsPbfListingVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_current_version`<sup>Optional</sup> <a name="is_current_version" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion"></a>

```python
is_current_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `pbf_listing_version_id`<sup>Optional</sup> <a name="pbf_listing_version_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId"></a>

```python
pbf_listing_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}.

---

### DataOciFunctionsPbfListingVersionsFilter <a name="DataOciFunctionsPbfListingVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}.

---

### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection()
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems()
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig()
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements()
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies()
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFunctionsPbfListingVersionsFilterList <a name="DataOciFunctionsPbfListingVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsPbfListingVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFunctionsPbfListingVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]]

---


### DataOciFunctionsPbfListingVersionsFilterOutputReference <a name="DataOciFunctionsPbfListingVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFunctionsPbfListingVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>]

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional">is_optional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_optional`<sup>Required</sup> <a name="is_optional" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional"></a>

```python
is_optional: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary">change_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId">pbf_listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements">requirements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers">triggers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_summary`<sup>Required</sup> <a name="change_summary" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary"></a>

```python
change_summary: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config"></a>

```python
config: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pbf_listing_id`<sup>Required</sup> <a name="pbf_listing_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId"></a>

```python
pbf_listing_id: str
```

- *Type:* str

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements"></a>

```python
requirements: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers"></a>

```python
triggers: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs">min_memory_required_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `min_memory_required_in_mbs`<sup>Required</sup> <a name="min_memory_required_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs"></a>

```python
min_memory_required_in_mbs: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies"></a>

```python
policies: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_pbf_listing_versions

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items"></a>

```python
items: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a>

---



