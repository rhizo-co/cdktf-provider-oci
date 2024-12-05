# `dataOciDataSafeOnPremConnectors` Submodule <a name="`dataOciDataSafeOnPremConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeOnPremConnectors <a name="DataOciDataSafeOnPremConnectors" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors oci_data_safe_on_prem_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeOnPremConnectorsFilter]] = None,
  id: str = None,
  on_prem_connector_id: str = None,
  on_prem_connector_lifecycle_state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id DataOciDataSafeOnPremConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#access_level DataOciDataSafeOnPremConnectors#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id_in_subtree DataOciDataSafeOnPremConnectors#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#display_name DataOciDataSafeOnPremConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#id DataOciDataSafeOnPremConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.onPremConnectorId">on_prem_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_id DataOciDataSafeOnPremConnectors#on_prem_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.onPremConnectorLifecycleState">on_prem_connector_lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_lifecycle_state DataOciDataSafeOnPremConnectors#on_prem_connector_lifecycle_state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id DataOciDataSafeOnPremConnectors#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#access_level DataOciDataSafeOnPremConnectors#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id_in_subtree DataOciDataSafeOnPremConnectors#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#display_name DataOciDataSafeOnPremConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#filter DataOciDataSafeOnPremConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#id DataOciDataSafeOnPremConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_prem_connector_id`<sup>Optional</sup> <a name="on_prem_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.onPremConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_id DataOciDataSafeOnPremConnectors#on_prem_connector_id}.

---

##### `on_prem_connector_lifecycle_state`<sup>Optional</sup> <a name="on_prem_connector_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.onPremConnectorLifecycleState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_lifecycle_state DataOciDataSafeOnPremConnectors#on_prem_connector_lifecycle_state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorId">reset_on_prem_connector_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorLifecycleState">reset_on_prem_connector_lifecycle_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeOnPremConnectorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_prem_connector_id` <a name="reset_on_prem_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorId"></a>

```python
def reset_on_prem_connector_id() -> None
```

##### `reset_on_prem_connector_lifecycle_state` <a name="reset_on_prem_connector_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorLifecycleState"></a>

```python
def reset_on_prem_connector_lifecycle_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeOnPremConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeOnPremConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeOnPremConnectors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeOnPremConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeOnPremConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList">DataOciDataSafeOnPremConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectors">on_prem_connectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList">DataOciDataSafeOnPremConnectorsOnPremConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorIdInput">on_prem_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleStateInput">on_prem_connector_lifecycle_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorId">on_prem_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleState">on_prem_connector_lifecycle_state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filter"></a>

```python
filter: DataOciDataSafeOnPremConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList">DataOciDataSafeOnPremConnectorsFilterList</a>

---

##### `on_prem_connectors`<sup>Required</sup> <a name="on_prem_connectors" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectors"></a>

```python
on_prem_connectors: DataOciDataSafeOnPremConnectorsOnPremConnectorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList">DataOciDataSafeOnPremConnectorsOnPremConnectorsList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeOnPremConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_prem_connector_id_input`<sup>Optional</sup> <a name="on_prem_connector_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorIdInput"></a>

```python
on_prem_connector_id_input: str
```

- *Type:* str

---

##### `on_prem_connector_lifecycle_state_input`<sup>Optional</sup> <a name="on_prem_connector_lifecycle_state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleStateInput"></a>

```python
on_prem_connector_lifecycle_state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `on_prem_connector_id`<sup>Required</sup> <a name="on_prem_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorId"></a>

```python
on_prem_connector_id: str
```

- *Type:* str

---

##### `on_prem_connector_lifecycle_state`<sup>Required</sup> <a name="on_prem_connector_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleState"></a>

```python
on_prem_connector_lifecycle_state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeOnPremConnectorsConfig <a name="DataOciDataSafeOnPremConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeOnPremConnectorsFilter]] = None,
  id: str = None,
  on_prem_connector_id: str = None,
  on_prem_connector_lifecycle_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id DataOciDataSafeOnPremConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#access_level DataOciDataSafeOnPremConnectors#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id_in_subtree DataOciDataSafeOnPremConnectors#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#display_name DataOciDataSafeOnPremConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#id DataOciDataSafeOnPremConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorId">on_prem_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_id DataOciDataSafeOnPremConnectors#on_prem_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorLifecycleState">on_prem_connector_lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_lifecycle_state DataOciDataSafeOnPremConnectors#on_prem_connector_lifecycle_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id DataOciDataSafeOnPremConnectors#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#access_level DataOciDataSafeOnPremConnectors#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id_in_subtree DataOciDataSafeOnPremConnectors#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#display_name DataOciDataSafeOnPremConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeOnPremConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#filter DataOciDataSafeOnPremConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#id DataOciDataSafeOnPremConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_prem_connector_id`<sup>Optional</sup> <a name="on_prem_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorId"></a>

```python
on_prem_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_id DataOciDataSafeOnPremConnectors#on_prem_connector_id}.

---

##### `on_prem_connector_lifecycle_state`<sup>Optional</sup> <a name="on_prem_connector_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorLifecycleState"></a>

```python
on_prem_connector_lifecycle_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_lifecycle_state DataOciDataSafeOnPremConnectors#on_prem_connector_lifecycle_state}.

---

### DataOciDataSafeOnPremConnectorsFilter <a name="DataOciDataSafeOnPremConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#name DataOciDataSafeOnPremConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#values DataOciDataSafeOnPremConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#regex DataOciDataSafeOnPremConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#name DataOciDataSafeOnPremConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#values DataOciDataSafeOnPremConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#regex DataOciDataSafeOnPremConnectors#regex}.

---

### DataOciDataSafeOnPremConnectorsOnPremConnectors <a name="DataOciDataSafeOnPremConnectorsOnPremConnectors" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeOnPremConnectorsFilterList <a name="DataOciDataSafeOnPremConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeOnPremConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeOnPremConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]]

---


### DataOciDataSafeOnPremConnectorsFilterOutputReference <a name="DataOciDataSafeOnPremConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeOnPremConnectorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>]

---


### DataOciDataSafeOnPremConnectorsOnPremConnectorsList <a name="DataOciDataSafeOnPremConnectorsOnPremConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference <a name="DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_on_prem_connectors

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.availableVersion">available_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.createdVersion">created_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors">DataOciDataSafeOnPremConnectorsOnPremConnectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_version`<sup>Required</sup> <a name="available_version" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.availableVersion"></a>

```python
available_version: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_version`<sup>Required</sup> <a name="created_version" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.createdVersion"></a>

```python
created_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeOnPremConnectorsOnPremConnectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors">DataOciDataSafeOnPremConnectorsOnPremConnectors</a>

---



