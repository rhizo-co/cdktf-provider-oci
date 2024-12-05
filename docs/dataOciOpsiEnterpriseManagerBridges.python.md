# `dataOciOpsiEnterpriseManagerBridges` Submodule <a name="`dataOciOpsiEnterpriseManagerBridges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiEnterpriseManagerBridges <a name="DataOciOpsiEnterpriseManagerBridges" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges oci_opsi_enterprise_manager_bridges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiEnterpriseManagerBridgesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#filter DataOciOpsiEnterpriseManagerBridges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOpsiEnterpriseManagerBridgesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridges resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiEnterpriseManagerBridges to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiEnterpriseManagerBridges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiEnterpriseManagerBridges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.enterpriseManagerBridgeCollection">enterprise_manager_bridge_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList">DataOciOpsiEnterpriseManagerBridgesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `enterprise_manager_bridge_collection`<sup>Required</sup> <a name="enterprise_manager_bridge_collection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.enterpriseManagerBridgeCollection"></a>

```python
enterprise_manager_bridge_collection: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filter"></a>

```python
filter: DataOciOpsiEnterpriseManagerBridgesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList">DataOciOpsiEnterpriseManagerBridgesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOpsiEnterpriseManagerBridgesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiEnterpriseManagerBridgesConfig <a name="DataOciOpsiEnterpriseManagerBridgesConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiEnterpriseManagerBridgesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOpsiEnterpriseManagerBridgesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#filter DataOciOpsiEnterpriseManagerBridges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}.

---

### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection()
```


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems()
```


### DataOciOpsiEnterpriseManagerBridgesFilter <a name="DataOciOpsiEnterpriseManagerBridgesFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#name DataOciOpsiEnterpriseManagerBridges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#values DataOciOpsiEnterpriseManagerBridges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#regex DataOciOpsiEnterpriseManagerBridges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#name DataOciOpsiEnterpriseManagerBridges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#values DataOciOpsiEnterpriseManagerBridges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#regex DataOciOpsiEnterpriseManagerBridges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketName">object_storage_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketStatusDetails">object_storage_bucket_status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageNamespaceName">object_storage_namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `object_storage_bucket_name`<sup>Required</sup> <a name="object_storage_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketName"></a>

```python
object_storage_bucket_name: str
```

- *Type:* str

---

##### `object_storage_bucket_status_details`<sup>Required</sup> <a name="object_storage_bucket_status_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketStatusDetails"></a>

```python
object_storage_bucket_status_details: str
```

- *Type:* str

---

##### `object_storage_namespace_name`<sup>Required</sup> <a name="object_storage_namespace_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageNamespaceName"></a>

```python
object_storage_namespace_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems</a>

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.items"></a>

```python
items: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection</a>

---


### DataOciOpsiEnterpriseManagerBridgesFilterList <a name="DataOciOpsiEnterpriseManagerBridgesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiEnterpriseManagerBridgesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOpsiEnterpriseManagerBridgesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]]

---


### DataOciOpsiEnterpriseManagerBridgesFilterOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_enterprise_manager_bridges

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOpsiEnterpriseManagerBridgesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>]

---



