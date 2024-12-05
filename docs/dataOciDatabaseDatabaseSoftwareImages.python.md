# `dataOciDatabaseDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images oci_database_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabaseSoftwareImagesFilter]] = None,
  id: str = None,
  image_shape_family: str = None,
  image_type: str = None,
  is_upgrade_supported: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageType">image_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.isUpgradeSupported">is_upgrade_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#filter DataOciDatabaseDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_shape_family`<sup>Optional</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}.

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}.

---

##### `is_upgrade_supported`<sup>Optional</sup> <a name="is_upgrade_supported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.isUpgradeSupported"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily">reset_image_shape_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType">reset_image_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported">reset_is_upgrade_supported</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabaseSoftwareImagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_shape_family` <a name="reset_image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily"></a>

```python
def reset_image_shape_family() -> None
```

##### `reset_image_type` <a name="reset_image_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType"></a>

```python
def reset_image_type() -> None
```

##### `reset_is_upgrade_supported` <a name="reset_is_upgrade_supported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported"></a>

```python
def reset_is_upgrade_supported() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDatabaseSoftwareImages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages">database_software_images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput">image_shape_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput">is_upgrade_supported_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported">is_upgrade_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_software_images`<sup>Required</sup> <a name="database_software_images" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages"></a>

```python
database_software_images: DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter"></a>

```python
filter: DataOciDatabaseDatabaseSoftwareImagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabaseSoftwareImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_shape_family_input`<sup>Optional</sup> <a name="image_shape_family_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```python
image_shape_family_input: str
```

- *Type:* str

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `is_upgrade_supported_input`<sup>Optional</sup> <a name="is_upgrade_supported_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput"></a>

```python
is_upgrade_supported_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_shape_family`<sup>Required</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily"></a>

```python
image_shape_family: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `is_upgrade_supported`<sup>Required</sup> <a name="is_upgrade_supported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported"></a>

```python
is_upgrade_supported: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseSoftwareImagesConfig <a name="DataOciDatabaseDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabaseSoftwareImagesFilter]] = None,
  id: str = None,
  image_shape_family: str = None,
  image_type: str = None,
  is_upgrade_supported: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType">image_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported">is_upgrade_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabaseSoftwareImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#filter DataOciDatabaseDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_shape_family`<sup>Optional</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```python
image_shape_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}.

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}.

---

##### `is_upgrade_supported`<sup>Optional</sup> <a name="is_upgrade_supported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported"></a>

```python
is_upgrade_supported: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}.

---

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages()
```


### DataOciDatabaseDatabaseSoftwareImagesFilter <a name="DataOciDatabaseDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches">database_software_image_included_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches">database_software_image_one_off_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary">included_patches_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported">is_upgrade_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory">ls_inventory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet">patch_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId">source_db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_software_image_included_patches`<sup>Required</sup> <a name="database_software_image_included_patches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches"></a>

```python
database_software_image_included_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_software_image_one_off_patches`<sup>Required</sup> <a name="database_software_image_one_off_patches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches"></a>

```python
database_software_image_one_off_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_shape_family`<sup>Required</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily"></a>

```python
image_shape_family: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `included_patches_summary`<sup>Required</sup> <a name="included_patches_summary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary"></a>

```python
included_patches_summary: str
```

- *Type:* str

---

##### `is_upgrade_supported`<sup>Required</sup> <a name="is_upgrade_supported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported"></a>

```python
is_upgrade_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ls_inventory`<sup>Required</sup> <a name="ls_inventory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory"></a>

```python
ls_inventory: str
```

- *Type:* str

---

##### `patch_set`<sup>Required</sup> <a name="patch_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet"></a>

```python
patch_set: str
```

- *Type:* str

---

##### `source_db_home_id`<sup>Required</sup> <a name="source_db_home_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId"></a>

```python
source_db_home_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a>

---


### DataOciDatabaseDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabaseSoftwareImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]]

---


### DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_software_images

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseDatabaseSoftwareImagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>]

---



