# `dataOciCoreAppCatalogListingResourceVersions` Submodule <a name="`dataOciCoreAppCatalogListingResourceVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreAppCatalogListingResourceVersions <a name="DataOciCoreAppCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions oci_core_app_catalog_listing_resource_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listing_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreAppCatalogListingResourceVersionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#filter DataOciCoreAppCatalogListingResourceVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreAppCatalogListingResourceVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreAppCatalogListingResourceVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreAppCatalogListingResourceVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreAppCatalogListingResourceVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.appCatalogListingResourceVersions">app_catalog_listing_resource_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList">DataOciCoreAppCatalogListingResourceVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `app_catalog_listing_resource_versions`<sup>Required</sup> <a name="app_catalog_listing_resource_versions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.appCatalogListingResourceVersions"></a>

```python
app_catalog_listing_resource_versions: DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filter"></a>

```python
filter: DataOciCoreAppCatalogListingResourceVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList">DataOciCoreAppCatalogListingResourceVersionsFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreAppCatalogListingResourceVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions()
```


### DataOciCoreAppCatalogListingResourceVersionsConfig <a name="DataOciCoreAppCatalogListingResourceVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listing_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreAppCatalogListingResourceVersionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreAppCatalogListingResourceVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#filter DataOciCoreAppCatalogListingResourceVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreAppCatalogListingResourceVersionsFilter <a name="DataOciCoreAppCatalogListingResourceVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#name DataOciCoreAppCatalogListingResourceVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#values DataOciCoreAppCatalogListingResourceVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#regex DataOciCoreAppCatalogListingResourceVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#name DataOciCoreAppCatalogListingResourceVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#values DataOciCoreAppCatalogListingResourceVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#regex DataOciCoreAppCatalogListingResourceVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.accessiblePorts">accessible_ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.allowedActions">allowed_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.availableRegions">available_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.compatibleShapes">compatible_shapes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceId">listing_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceVersion">listing_resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.timePublished">time_published</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accessible_ports`<sup>Required</sup> <a name="accessible_ports" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.accessiblePorts"></a>

```python
accessible_ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `allowed_actions`<sup>Required</sup> <a name="allowed_actions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.allowedActions"></a>

```python
allowed_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `available_regions`<sup>Required</sup> <a name="available_regions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.availableRegions"></a>

```python
available_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compatible_shapes`<sup>Required</sup> <a name="compatible_shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.compatibleShapes"></a>

```python
compatible_shapes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `listing_resource_id`<sup>Required</sup> <a name="listing_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceId"></a>

```python
listing_resource_id: str
```

- *Type:* str

---

##### `listing_resource_version`<sup>Required</sup> <a name="listing_resource_version" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceVersion"></a>

```python
listing_resource_version: str
```

- *Type:* str

---

##### `time_published`<sup>Required</sup> <a name="time_published" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.timePublished"></a>

```python
time_published: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions</a>

---


### DataOciCoreAppCatalogListingResourceVersionsFilterList <a name="DataOciCoreAppCatalogListingResourceVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreAppCatalogListingResourceVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]]

---


### DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference <a name="DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_app_catalog_listing_resource_versions

dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreAppCatalogListingResourceVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>]

---



