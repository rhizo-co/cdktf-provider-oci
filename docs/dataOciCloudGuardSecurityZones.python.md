# `dataOciCloudGuardSecurityZones` Submodule <a name="`dataOciCloudGuardSecurityZones` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardSecurityZones <a name="DataOciCloudGuardSecurityZones" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones oci_cloud_guard_security_zones}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardSecurityZonesFilter]] = None,
  id: str = None,
  is_required_security_zones_in_subtree: typing.Union[bool, IResolvable] = None,
  security_recipe_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#compartment_id DataOciCloudGuardSecurityZones#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#display_name DataOciCloudGuardSecurityZones#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#id DataOciCloudGuardSecurityZones#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.isRequiredSecurityZonesInSubtree">is_required_security_zones_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#is_required_security_zones_in_subtree DataOciCloudGuardSecurityZones#is_required_security_zones_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.securityRecipeId">security_recipe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#security_recipe_id DataOciCloudGuardSecurityZones#security_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#state DataOciCloudGuardSecurityZones#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#compartment_id DataOciCloudGuardSecurityZones#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#display_name DataOciCloudGuardSecurityZones#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#filter DataOciCloudGuardSecurityZones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#id DataOciCloudGuardSecurityZones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_required_security_zones_in_subtree`<sup>Optional</sup> <a name="is_required_security_zones_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.isRequiredSecurityZonesInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#is_required_security_zones_in_subtree DataOciCloudGuardSecurityZones#is_required_security_zones_in_subtree}.

---

##### `security_recipe_id`<sup>Optional</sup> <a name="security_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.securityRecipeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#security_recipe_id DataOciCloudGuardSecurityZones#security_recipe_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#state DataOciCloudGuardSecurityZones#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetIsRequiredSecurityZonesInSubtree">reset_is_required_security_zones_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetSecurityRecipeId">reset_security_recipe_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudGuardSecurityZonesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_required_security_zones_in_subtree` <a name="reset_is_required_security_zones_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetIsRequiredSecurityZonesInSubtree"></a>

```python
def reset_is_required_security_zones_in_subtree() -> None
```

##### `reset_security_recipe_id` <a name="reset_security_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetSecurityRecipeId"></a>

```python
def reset_security_recipe_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudGuardSecurityZones resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudGuardSecurityZones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudGuardSecurityZones to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudGuardSecurityZones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardSecurityZones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList">DataOciCloudGuardSecurityZonesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityZoneCollection">security_zone_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtreeInput">is_required_security_zones_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeIdInput">security_recipe_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtree">is_required_security_zones_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeId">security_recipe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filter"></a>

```python
filter: DataOciCloudGuardSecurityZonesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList">DataOciCloudGuardSecurityZonesFilterList</a>

---

##### `security_zone_collection`<sup>Required</sup> <a name="security_zone_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityZoneCollection"></a>

```python
security_zone_collection: DataOciCloudGuardSecurityZonesSecurityZoneCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudGuardSecurityZonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_required_security_zones_in_subtree_input`<sup>Optional</sup> <a name="is_required_security_zones_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtreeInput"></a>

```python
is_required_security_zones_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_recipe_id_input`<sup>Optional</sup> <a name="security_recipe_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeIdInput"></a>

```python
security_recipe_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_required_security_zones_in_subtree`<sup>Required</sup> <a name="is_required_security_zones_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtree"></a>

```python
is_required_security_zones_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_recipe_id`<sup>Required</sup> <a name="security_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeId"></a>

```python
security_recipe_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardSecurityZonesConfig <a name="DataOciCloudGuardSecurityZonesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardSecurityZonesFilter]] = None,
  id: str = None,
  is_required_security_zones_in_subtree: typing.Union[bool, IResolvable] = None,
  security_recipe_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#compartment_id DataOciCloudGuardSecurityZones#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#display_name DataOciCloudGuardSecurityZones#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#id DataOciCloudGuardSecurityZones#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.isRequiredSecurityZonesInSubtree">is_required_security_zones_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#is_required_security_zones_in_subtree DataOciCloudGuardSecurityZones#is_required_security_zones_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.securityRecipeId">security_recipe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#security_recipe_id DataOciCloudGuardSecurityZones#security_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#state DataOciCloudGuardSecurityZones#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#compartment_id DataOciCloudGuardSecurityZones#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#display_name DataOciCloudGuardSecurityZones#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardSecurityZonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#filter DataOciCloudGuardSecurityZones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#id DataOciCloudGuardSecurityZones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_required_security_zones_in_subtree`<sup>Optional</sup> <a name="is_required_security_zones_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.isRequiredSecurityZonesInSubtree"></a>

```python
is_required_security_zones_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#is_required_security_zones_in_subtree DataOciCloudGuardSecurityZones#is_required_security_zones_in_subtree}.

---

##### `security_recipe_id`<sup>Optional</sup> <a name="security_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.securityRecipeId"></a>

```python
security_recipe_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#security_recipe_id DataOciCloudGuardSecurityZones#security_recipe_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#state DataOciCloudGuardSecurityZones#state}.

---

### DataOciCloudGuardSecurityZonesFilter <a name="DataOciCloudGuardSecurityZonesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#name DataOciCloudGuardSecurityZones#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#values DataOciCloudGuardSecurityZones#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#regex DataOciCloudGuardSecurityZones#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#name DataOciCloudGuardSecurityZones#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#values DataOciCloudGuardSecurityZones#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#regex DataOciCloudGuardSecurityZones#regex}.

---

### DataOciCloudGuardSecurityZonesSecurityZoneCollection <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection()
```


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardSecurityZonesFilterList <a name="DataOciCloudGuardSecurityZonesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardSecurityZonesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudGuardSecurityZonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]]

---


### DataOciCloudGuardSecurityZonesFilterOutputReference <a name="DataOciCloudGuardSecurityZonesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudGuardSecurityZonesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter">DataOciCloudGuardSecurityZonesFilter</a>]

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.inheritedByCompartments">inherited_by_compartments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneRecipeId">security_zone_recipe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneTargetId">security_zone_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inherited_by_compartments`<sup>Required</sup> <a name="inherited_by_compartments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.inheritedByCompartments"></a>

```python
inherited_by_compartments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `security_zone_recipe_id`<sup>Required</sup> <a name="security_zone_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneRecipeId"></a>

```python
security_zone_recipe_id: str
```

- *Type:* str

---

##### `security_zone_target_id`<sup>Required</sup> <a name="security_zone_target_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneTargetId"></a>

```python
security_zone_target_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems</a>

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionList <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_security_zones

dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection">DataOciCloudGuardSecurityZonesSecurityZoneCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardSecurityZonesSecurityZoneCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection">DataOciCloudGuardSecurityZonesSecurityZoneCollection</a>

---



