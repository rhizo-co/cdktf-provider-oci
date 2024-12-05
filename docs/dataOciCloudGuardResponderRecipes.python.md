# `dataOciCloudGuardResponderRecipes` Submodule <a name="`dataOciCloudGuardResponderRecipes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardResponderRecipes <a name="DataOciCloudGuardResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes oci_cloud_guard_responder_recipes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardResponderRecipesFilter]] = None,
  id: str = None,
  resource_metadata_only: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id DataOciCloudGuardResponderRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#access_level DataOciCloudGuardResponderRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id_in_subtree DataOciCloudGuardResponderRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#display_name DataOciCloudGuardResponderRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#id DataOciCloudGuardResponderRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.resourceMetadataOnly">resource_metadata_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#resource_metadata_only DataOciCloudGuardResponderRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#state DataOciCloudGuardResponderRecipes#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id DataOciCloudGuardResponderRecipes#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#access_level DataOciCloudGuardResponderRecipes#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id_in_subtree DataOciCloudGuardResponderRecipes#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#display_name DataOciCloudGuardResponderRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#filter DataOciCloudGuardResponderRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#id DataOciCloudGuardResponderRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_metadata_only`<sup>Optional</sup> <a name="resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.resourceMetadataOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#resource_metadata_only DataOciCloudGuardResponderRecipes#resource_metadata_only}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#state DataOciCloudGuardResponderRecipes#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetResourceMetadataOnly">reset_resource_metadata_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudGuardResponderRecipesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_metadata_only` <a name="reset_resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetResourceMetadataOnly"></a>

```python
def reset_resource_metadata_only() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudGuardResponderRecipes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudGuardResponderRecipes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudGuardResponderRecipes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudGuardResponderRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardResponderRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList">DataOciCloudGuardResponderRecipesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.responderRecipeCollection">responder_recipe_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnlyInput">resource_metadata_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnly">resource_metadata_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filter"></a>

```python
filter: DataOciCloudGuardResponderRecipesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList">DataOciCloudGuardResponderRecipesFilterList</a>

---

##### `responder_recipe_collection`<sup>Required</sup> <a name="responder_recipe_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.responderRecipeCollection"></a>

```python
responder_recipe_collection: DataOciCloudGuardResponderRecipesResponderRecipeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudGuardResponderRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_metadata_only_input`<sup>Optional</sup> <a name="resource_metadata_only_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnlyInput"></a>

```python
resource_metadata_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_metadata_only`<sup>Required</sup> <a name="resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnly"></a>

```python
resource_metadata_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardResponderRecipesConfig <a name="DataOciCloudGuardResponderRecipesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardResponderRecipesFilter]] = None,
  id: str = None,
  resource_metadata_only: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id DataOciCloudGuardResponderRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#access_level DataOciCloudGuardResponderRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id_in_subtree DataOciCloudGuardResponderRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#display_name DataOciCloudGuardResponderRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#id DataOciCloudGuardResponderRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.resourceMetadataOnly">resource_metadata_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#resource_metadata_only DataOciCloudGuardResponderRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#state DataOciCloudGuardResponderRecipes#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id DataOciCloudGuardResponderRecipes#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#access_level DataOciCloudGuardResponderRecipes#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id_in_subtree DataOciCloudGuardResponderRecipes#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#display_name DataOciCloudGuardResponderRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardResponderRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#filter DataOciCloudGuardResponderRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#id DataOciCloudGuardResponderRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_metadata_only`<sup>Optional</sup> <a name="resource_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.resourceMetadataOnly"></a>

```python
resource_metadata_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#resource_metadata_only DataOciCloudGuardResponderRecipes#resource_metadata_only}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#state DataOciCloudGuardResponderRecipes#state}.

---

### DataOciCloudGuardResponderRecipesFilter <a name="DataOciCloudGuardResponderRecipesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#name DataOciCloudGuardResponderRecipes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#values DataOciCloudGuardResponderRecipes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#regex DataOciCloudGuardResponderRecipes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#name DataOciCloudGuardResponderRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#values DataOciCloudGuardResponderRecipes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#regex DataOciCloudGuardResponderRecipes#regex}.

---

### DataOciCloudGuardResponderRecipesResponderRecipeCollection <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection()
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems()
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules()
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails()
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations()
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules()
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails()
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardResponderRecipesFilterList <a name="DataOciCloudGuardResponderRecipesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudGuardResponderRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]]

---


### DataOciCloudGuardResponderRecipesFilterOutputReference <a name="DataOciCloudGuardResponderRecipesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudGuardResponderRecipesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>]

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.responderRuleId">responder_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.supportedModes">supported_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responder_rule_id`<sup>Required</sup> <a name="responder_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```python
responder_rule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_modes`<sup>Required</sup> <a name="supported_modes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```python
supported_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.effectiveResponderRules">effective_responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.responderRules">responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.sourceResponderRecipeId">source_responder_recipe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_responder_rules`<sup>Required</sup> <a name="effective_responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.effectiveResponderRules"></a>

```python
effective_responder_rules: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `responder_rules`<sup>Required</sup> <a name="responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.responderRules"></a>

```python
responder_rules: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList</a>

---

##### `source_responder_recipe_id`<sup>Required</sup> <a name="source_responder_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.sourceResponderRecipeId"></a>

```python
source_responder_recipe_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.responderRuleId">responder_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.supportedModes">supported_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responder_rule_id`<sup>Required</sup> <a name="responder_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.responderRuleId"></a>

```python
responder_rule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_modes`<sup>Required</sup> <a name="supported_modes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.supportedModes"></a>

```python
supported_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipes

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection">DataOciCloudGuardResponderRecipesResponderRecipeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipesResponderRecipeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection">DataOciCloudGuardResponderRecipesResponderRecipeCollection</a>

---



