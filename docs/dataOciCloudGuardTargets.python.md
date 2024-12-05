# `dataOciCloudGuardTargets` Submodule <a name="`dataOciCloudGuardTargets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardTargets <a name="DataOciCloudGuardTargets" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets oci_cloud_guard_targets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargets(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardTargetsFilter]] = None,
  id: str = None,
  is_non_security_zone_targets_only_query: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.isNonSecurityZoneTargetsOnlyQuery">is_non_security_zone_targets_only_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#filter DataOciCloudGuardTargets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_non_security_zone_targets_only_query`<sup>Optional</sup> <a name="is_non_security_zone_targets_only_query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.isNonSecurityZoneTargetsOnlyQuery"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetIsNonSecurityZoneTargetsOnlyQuery">reset_is_non_security_zone_targets_only_query</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudGuardTargetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_non_security_zone_targets_only_query` <a name="reset_is_non_security_zone_targets_only_query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetIsNonSecurityZoneTargetsOnlyQuery"></a>

```python
def reset_is_non_security_zone_targets_only_query() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudGuardTargets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudGuardTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudGuardTargets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudGuardTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList">DataOciCloudGuardTargetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.targetCollection">target_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList">DataOciCloudGuardTargetsTargetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQueryInput">is_non_security_zone_targets_only_query_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQuery">is_non_security_zone_targets_only_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filter"></a>

```python
filter: DataOciCloudGuardTargetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList">DataOciCloudGuardTargetsFilterList</a>

---

##### `target_collection`<sup>Required</sup> <a name="target_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.targetCollection"></a>

```python
target_collection: DataOciCloudGuardTargetsTargetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList">DataOciCloudGuardTargetsTargetCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudGuardTargetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_non_security_zone_targets_only_query_input`<sup>Optional</sup> <a name="is_non_security_zone_targets_only_query_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQueryInput"></a>

```python
is_non_security_zone_targets_only_query_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_non_security_zone_targets_only_query`<sup>Required</sup> <a name="is_non_security_zone_targets_only_query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQuery"></a>

```python
is_non_security_zone_targets_only_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardTargetsConfig <a name="DataOciCloudGuardTargetsConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardTargetsFilter]] = None,
  id: str = None,
  is_non_security_zone_targets_only_query: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.isNonSecurityZoneTargetsOnlyQuery">is_non_security_zone_targets_only_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardTargetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#filter DataOciCloudGuardTargets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_non_security_zone_targets_only_query`<sup>Optional</sup> <a name="is_non_security_zone_targets_only_query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.isNonSecurityZoneTargetsOnlyQuery"></a>

```python
is_non_security_zone_targets_only_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}.

---

### DataOciCloudGuardTargetsFilter <a name="DataOciCloudGuardTargetsFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#name DataOciCloudGuardTargets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#values DataOciCloudGuardTargets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#regex DataOciCloudGuardTargets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#name DataOciCloudGuardTargets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#values DataOciCloudGuardTargets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#regex DataOciCloudGuardTargets#regex}.

---

### DataOciCloudGuardTargetsTargetCollection <a name="DataOciCloudGuardTargetsTargetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection()
```


### DataOciCloudGuardTargetsTargetCollectionItems <a name="DataOciCloudGuardTargetsTargetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails()
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardTargetsFilterList <a name="DataOciCloudGuardTargetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudGuardTargetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]]

---


### DataOciCloudGuardTargetsFilterOutputReference <a name="DataOciCloudGuardTargetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudGuardTargetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>]

---


### DataOciCloudGuardTargetsTargetCollectionItemsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.inheritedByCompartments">inherited_by_compartments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.recipeCount">recipe_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetails">target_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetectorRecipes">target_detector_recipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResponderRecipes">target_responder_recipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems">DataOciCloudGuardTargetsTargetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inherited_by_compartments`<sup>Required</sup> <a name="inherited_by_compartments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.inheritedByCompartments"></a>

```python
inherited_by_compartments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `recipe_count`<sup>Required</sup> <a name="recipe_count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.recipeCount"></a>

```python
recipe_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_details`<sup>Required</sup> <a name="target_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetails"></a>

```python
target_details: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList</a>

---

##### `target_detector_recipes`<sup>Required</sup> <a name="target_detector_recipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetectorRecipes"></a>

```python
target_detector_recipes: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList</a>

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `target_responder_recipes`<sup>Required</sup> <a name="target_responder_recipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResponderRecipes"></a>

```python
target_responder_recipes: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems">DataOciCloudGuardTargetsTargetCollectionItems</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneDisplayName">security_zone_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneId">security_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetSecurityZoneRecipes">target_security_zone_recipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_zone_display_name`<sup>Required</sup> <a name="security_zone_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneDisplayName"></a>

```python
security_zone_display_name: str
```

- *Type:* str

---

##### `security_zone_id`<sup>Required</sup> <a name="security_zone_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneId"></a>

```python
security_zone_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `target_security_zone_recipes`<sup>Required</sup> <a name="target_security_zone_recipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetSecurityZoneRecipes"></a>

```python
target_security_zone_recipes: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies">security_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `security_policies`<sup>Required</sup> <a name="security_policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies"></a>

```python
security_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```python
values: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managed_list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `list_type`<sup>Required</sup> <a name="list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```python
list_type: str
```

- *Type:* str

---

##### `managed_list_type`<sup>Required</sup> <a name="managed_list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```python
managed_list_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups">condition_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">is_configuration_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel">risk_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_groups`<sup>Required</sup> <a name="condition_groups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```python
condition_groups: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a>

---

##### `is_configuration_allowed`<sup>Required</sup> <a name="is_configuration_allowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```python
is_configuration_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `risk_level`<sup>Required</sup> <a name="risk_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField">query_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `query_field`<sup>Required</sup> <a name="query_field" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```python
query_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detector">detector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId">detector_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings">entities_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes">managed_list_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detector"></a>

```python
detector: str
```

- *Type:* str

---

##### `detector_rule_id`<sup>Required</sup> <a name="detector_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId"></a>

```python
detector_rule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entities_mappings`<sup>Required</sup> <a name="entities_mappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings"></a>

```python
entities_mappings: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `managed_list_types`<sup>Required</sup> <a name="managed_list_types" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes"></a>

```python
managed_list_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```python
values: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managed_list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `list_type`<sup>Required</sup> <a name="list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```python
list_type: str
```

- *Type:* str

---

##### `managed_list_type`<sup>Required</sup> <a name="managed_list_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```python
managed_list_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups">condition_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">is_configuration_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">risk_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_groups`<sup>Required</sup> <a name="condition_groups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```python
condition_groups: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `is_configuration_allowed`<sup>Required</sup> <a name="is_configuration_allowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```python
is_configuration_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `risk_level`<sup>Required</sup> <a name="risk_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">query_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `query_field`<sup>Required</sup> <a name="query_field" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```python
query_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId">detector_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings">entities_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes">managed_list_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector"></a>

```python
detector: str
```

- *Type:* str

---

##### `detector_rule_id`<sup>Required</sup> <a name="detector_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```python
detector_rule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entities_mappings`<sup>Required</sup> <a name="entities_mappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```python
entities_mappings: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `managed_list_types`<sup>Required</sup> <a name="managed_list_types" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```python
managed_list_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detector">detector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeId">detector_recipe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeType">detector_recipe_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRules">detector_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.effectiveDetectorRules">effective_detector_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detector"></a>

```python
detector: str
```

- *Type:* str

---

##### `detector_recipe_id`<sup>Required</sup> <a name="detector_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeId"></a>

```python
detector_recipe_id: str
```

- *Type:* str

---

##### `detector_recipe_type`<sup>Required</sup> <a name="detector_recipe_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeType"></a>

```python
detector_recipe_type: str
```

- *Type:* str

---

##### `detector_rules`<sup>Required</sup> <a name="detector_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRules"></a>

```python
detector_rules: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_detector_rules`<sup>Required</sup> <a name="effective_detector_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.effectiveDetectorRules"></a>

```python
effective_detector_rules: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId">responder_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes">supported_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responder_rule_id`<sup>Required</sup> <a name="responder_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```python
responder_rule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_modes`<sup>Required</sup> <a name="supported_modes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```python
supported_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.effectiveResponderRules">effective_responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRecipeId">responder_recipe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRules">responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_responder_rules`<sup>Required</sup> <a name="effective_responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.effectiveResponderRules"></a>

```python
effective_responder_rules: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `responder_recipe_id`<sup>Required</sup> <a name="responder_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRecipeId"></a>

```python
responder_recipe_id: str
```

- *Type:* str

---

##### `responder_rules`<sup>Required</sup> <a name="responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRules"></a>

```python
responder_rules: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId">responder_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.supportedModes">supported_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responder_rule_id`<sup>Required</sup> <a name="responder_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId"></a>

```python
responder_rule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_modes`<sup>Required</sup> <a name="supported_modes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.supportedModes"></a>

```python
supported_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionList <a name="DataOciCloudGuardTargetsTargetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardTargetsTargetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardTargetsTargetCollectionOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_targets

dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList">DataOciCloudGuardTargetsTargetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection">DataOciCloudGuardTargetsTargetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudGuardTargetsTargetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList">DataOciCloudGuardTargetsTargetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardTargetsTargetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection">DataOciCloudGuardTargetsTargetCollection</a>

---



