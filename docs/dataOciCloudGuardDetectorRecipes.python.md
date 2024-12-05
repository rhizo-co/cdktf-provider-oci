# `dataOciCloudGuardDetectorRecipes` Submodule <a name="`dataOciCloudGuardDetectorRecipes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDetectorRecipes <a name="DataOciCloudGuardDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes oci_cloud_guard_detector_recipes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardDetectorRecipesFilter]] = None,
  id: str = None,
  resource_metadata_only: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.resourceMetadataOnly">resource_metadata_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#filter DataOciCloudGuardDetectorRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_metadata_only`<sup>Optional</sup> <a name="resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.resourceMetadataOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly">reset_resource_metadata_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudGuardDetectorRecipesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_metadata_only` <a name="reset_resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly"></a>

```python
def reset_resource_metadata_only() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudGuardDetectorRecipes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudGuardDetectorRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDetectorRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection">detector_recipe_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput">resource_metadata_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly">resource_metadata_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `detector_recipe_collection`<sup>Required</sup> <a name="detector_recipe_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection"></a>

```python
detector_recipe_collection: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter"></a>

```python
filter: DataOciCloudGuardDetectorRecipesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudGuardDetectorRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_metadata_only_input`<sup>Optional</sup> <a name="resource_metadata_only_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput"></a>

```python
resource_metadata_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_metadata_only`<sup>Required</sup> <a name="resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly"></a>

```python
resource_metadata_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDetectorRecipesConfig <a name="DataOciCloudGuardDetectorRecipesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardDetectorRecipesFilter]] = None,
  id: str = None,
  resource_metadata_only: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly">resource_metadata_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardDetectorRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#filter DataOciCloudGuardDetectorRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_metadata_only`<sup>Optional</sup> <a name="resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly"></a>

```python
resource_metadata_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}.

---

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollection <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings()
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings()
```


### DataOciCloudGuardDetectorRecipesFilter <a name="DataOciCloudGuardDetectorRecipesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">is_preferred</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_preferred`<sup>Required</sup> <a name="is_preferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```python
is_preferred: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```python
values: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managed_list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `list_type`<sup>Required</sup> <a name="list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```python
list_type: str
```

- *Type:* str

---

##### `managed_list_type`<sup>Required</sup> <a name="managed_list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```python
managed_list_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">query_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `query_field`<sup>Required</sup> <a name="query_field" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```python
query_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings">entities_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">is_configuration_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel">risk_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a>

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entities_mappings`<sup>Required</sup> <a name="entities_mappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```python
entities_mappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `is_configuration_allowed`<sup>Required</sup> <a name="is_configuration_allowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```python
is_configuration_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `risk_level`<sup>Required</sup> <a name="risk_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField">query_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `query_field`<sup>Required</sup> <a name="query_field" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```python
query_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules">candidate_responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector">detector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId">detector_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings">entities_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes">managed_list_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `candidate_responder_rules`<sup>Required</sup> <a name="candidate_responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules"></a>

```python
candidate_responder_rules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a>

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector"></a>

```python
detector: str
```

- *Type:* str

---

##### `detector_rule_id`<sup>Required</sup> <a name="detector_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId"></a>

```python
detector_rule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entities_mappings`<sup>Required</sup> <a name="entities_mappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings"></a>

```python
entities_mappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `managed_list_types`<sup>Required</sup> <a name="managed_list_types" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes"></a>

```python
managed_list_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">is_preferred</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_preferred`<sup>Required</sup> <a name="is_preferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```python
is_preferred: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```python
values: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managed_list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `list_type`<sup>Required</sup> <a name="list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```python
list_type: str
```

- *Type:* str

---

##### `managed_list_type`<sup>Required</sup> <a name="managed_list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```python
managed_list_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">query_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `query_field`<sup>Required</sup> <a name="query_field" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```python
query_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">entities_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">is_configuration_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">risk_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entities_mappings`<sup>Required</sup> <a name="entities_mappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```python
entities_mappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `is_configuration_allowed`<sup>Required</sup> <a name="is_configuration_allowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```python
is_configuration_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `risk_level`<sup>Required</sup> <a name="risk_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">query_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `query_field`<sup>Required</sup> <a name="query_field" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```python
query_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules">candidate_responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId">detector_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings">entities_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes">managed_list_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `candidate_responder_rules`<sup>Required</sup> <a name="candidate_responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```python
candidate_responder_rules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector"></a>

```python
detector: str
```

- *Type:* str

---

##### `detector_rule_id`<sup>Required</sup> <a name="detector_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```python
detector_rule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entities_mappings`<sup>Required</sup> <a name="entities_mappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```python
entities_mappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `managed_list_types`<sup>Required</sup> <a name="managed_list_types" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```python
managed_list_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector">detector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType">detector_recipe_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules">detector_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules">effective_detector_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId">source_detector_recipe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector"></a>

```python
detector: str
```

- *Type:* str

---

##### `detector_recipe_type`<sup>Required</sup> <a name="detector_recipe_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType"></a>

```python
detector_recipe_type: str
```

- *Type:* str

---

##### `detector_rules`<sup>Required</sup> <a name="detector_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules"></a>

```python
detector_rules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_detector_rules`<sup>Required</sup> <a name="effective_detector_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules"></a>

```python
effective_detector_rules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `source_detector_recipe_id`<sup>Required</sup> <a name="source_detector_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId"></a>

```python
source_detector_recipe_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a>

---


### DataOciCloudGuardDetectorRecipesFilterList <a name="DataOciCloudGuardDetectorRecipesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDetectorRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudGuardDetectorRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]]

---


### DataOciCloudGuardDetectorRecipesFilterOutputReference <a name="DataOciCloudGuardDetectorRecipesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_detector_recipes

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudGuardDetectorRecipesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>]

---



