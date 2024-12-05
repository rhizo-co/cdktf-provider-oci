# `dataOciDatabaseAutonomousDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseAutonomousDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImages <a name="DataOciDatabaseAutonomousDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images oci_database_autonomous_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages(
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
  image_shape_family: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}.

---

##### `image_shape_family`<sup>Required</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#filter DataOciDatabaseAutonomousDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseSoftwareImages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.autonomousDatabaseSoftwareImageCollection">autonomous_database_software_image_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamilyInput">image_shape_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_database_software_image_collection`<sup>Required</sup> <a name="autonomous_database_software_image_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.autonomousDatabaseSoftwareImageCollection"></a>

```python
autonomous_database_software_image_collection: DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_shape_family_input`<sup>Optional</sup> <a name="image_shape_family_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```python
image_shape_family_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_shape_family`<sup>Required</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamily"></a>

```python
image_shape_family: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection()
```


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems()
```


### DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  image_shape_family: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}.

---

##### `image_shape_family`<sup>Required</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```python
image_shape_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#filter DataOciDatabaseAutonomousDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}.

---

### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#name DataOciDatabaseAutonomousDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#values DataOciDatabaseAutonomousDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#regex DataOciDatabaseAutonomousDatabaseSoftwareImages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#name DataOciDatabaseAutonomousDatabaseSoftwareImages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#values DataOciDatabaseAutonomousDatabaseSoftwareImages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#regex DataOciDatabaseAutonomousDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.autonomousDsiOneOffPatches">autonomous_dsi_one_off_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.imageShapeFamily">image_shape_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.releaseUpdate">release_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.sourceCdbId">source_cdb_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_dsi_one_off_patches`<sup>Required</sup> <a name="autonomous_dsi_one_off_patches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.autonomousDsiOneOffPatches"></a>

```python
autonomous_dsi_one_off_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_shape_family`<sup>Required</sup> <a name="image_shape_family" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.imageShapeFamily"></a>

```python
image_shape_family: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `release_update`<sup>Required</sup> <a name="release_update" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.releaseUpdate"></a>

```python
release_update: str
```

- *Type:* str

---

##### `source_cdb_id`<sup>Required</sup> <a name="source_cdb_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.sourceCdbId"></a>

```python
source_cdb_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems</a>

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection</a>

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]]

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_software_images

dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>]

---



