# `dataOciDataSafeDataSafePrivateEndpoints` Submodule <a name="`dataOciDataSafeDataSafePrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDataSafePrivateEndpoints <a name="DataOciDataSafeDataSafePrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints oci_data_safe_data_safe_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDataSafePrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id DataOciDataSafeDataSafePrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#access_level DataOciDataSafeDataSafePrivateEndpoints#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id_in_subtree DataOciDataSafeDataSafePrivateEndpoints#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#display_name DataOciDataSafeDataSafePrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#id DataOciDataSafeDataSafePrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#state DataOciDataSafeDataSafePrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#vcn_id DataOciDataSafeDataSafePrivateEndpoints#vcn_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id DataOciDataSafeDataSafePrivateEndpoints#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#access_level DataOciDataSafeDataSafePrivateEndpoints#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id_in_subtree DataOciDataSafeDataSafePrivateEndpoints#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#display_name DataOciDataSafeDataSafePrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#filter DataOciDataSafeDataSafePrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#id DataOciDataSafeDataSafePrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#state DataOciDataSafeDataSafePrivateEndpoints#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#vcn_id DataOciDataSafeDataSafePrivateEndpoints#vcn_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetVcnId">reset_vcn_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeDataSafePrivateEndpointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeDataSafePrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeDataSafePrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeDataSafePrivateEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeDataSafePrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDataSafePrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.dataSafePrivateEndpoints">data_safe_private_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList">DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList">DataOciDataSafeDataSafePrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_safe_private_endpoints`<sup>Required</sup> <a name="data_safe_private_endpoints" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.dataSafePrivateEndpoints"></a>

```python
data_safe_private_endpoints: DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList">DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.filter"></a>

```python
filter: DataOciDataSafeDataSafePrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList">DataOciDataSafeDataSafePrivateEndpointsFilterList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeDataSafePrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDataSafePrivateEndpointsConfig <a name="DataOciDataSafeDataSafePrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDataSafePrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id DataOciDataSafeDataSafePrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#access_level DataOciDataSafeDataSafePrivateEndpoints#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id_in_subtree DataOciDataSafeDataSafePrivateEndpoints#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#display_name DataOciDataSafeDataSafePrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#id DataOciDataSafeDataSafePrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#state DataOciDataSafeDataSafePrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#vcn_id DataOciDataSafeDataSafePrivateEndpoints#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id DataOciDataSafeDataSafePrivateEndpoints#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#access_level DataOciDataSafeDataSafePrivateEndpoints#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#compartment_id_in_subtree DataOciDataSafeDataSafePrivateEndpoints#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#display_name DataOciDataSafeDataSafePrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDataSafePrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#filter DataOciDataSafeDataSafePrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#id DataOciDataSafeDataSafePrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#state DataOciDataSafeDataSafePrivateEndpoints#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#vcn_id DataOciDataSafeDataSafePrivateEndpoints#vcn_id}.

---

### DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints <a name="DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints()
```


### DataOciDataSafeDataSafePrivateEndpointsFilter <a name="DataOciDataSafeDataSafePrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#name DataOciDataSafeDataSafePrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#values DataOciDataSafeDataSafePrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#regex DataOciDataSafeDataSafePrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#name DataOciDataSafeDataSafePrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#values DataOciDataSafeDataSafePrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoints#regex DataOciDataSafeDataSafePrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList <a name="DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference <a name="DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints">DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints">DataOciDataSafeDataSafePrivateEndpointsDataSafePrivateEndpoints</a>

---


### DataOciDataSafeDataSafePrivateEndpointsFilterList <a name="DataOciDataSafeDataSafePrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeDataSafePrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]]

---


### DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference <a name="DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_data_safe_private_endpoints

dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeDataSafePrivateEndpointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDataSafePrivateEndpoints.DataOciDataSafeDataSafePrivateEndpointsFilter">DataOciDataSafeDataSafePrivateEndpointsFilter</a>]

---



