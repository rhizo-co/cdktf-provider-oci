# `dataOciDemandSignalOccDemandSignals` Submodule <a name="`dataOciDemandSignalOccDemandSignals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDemandSignalOccDemandSignals <a name="DataOciDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals oci_demand_signal_occ_demand_signals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDemandSignalOccDemandSignalsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#filter DataOciDemandSignalOccDemandSignals#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDemandSignalOccDemandSignalsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDemandSignalOccDemandSignals to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDemandSignalOccDemandSignals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDemandSignalOccDemandSignals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection">occ_demand_signal_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter"></a>

```python
filter: DataOciDemandSignalOccDemandSignalsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a>

---

##### `occ_demand_signal_collection`<sup>Required</sup> <a name="occ_demand_signal_collection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection"></a>

```python
occ_demand_signal_collection: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDemandSignalOccDemandSignalsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDemandSignalOccDemandSignalsConfig <a name="DataOciDemandSignalOccDemandSignalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDemandSignalOccDemandSignalsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDemandSignalOccDemandSignalsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#filter DataOciDemandSignalOccDemandSignals#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}.

---

### DataOciDemandSignalOccDemandSignalsFilter <a name="DataOciDemandSignalOccDemandSignalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}.

---

### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection()
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems()
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals()
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues()
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDemandSignalOccDemandSignalsFilterList <a name="DataOciDemandSignalOccDemandSignalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDemandSignalOccDemandSignalsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDemandSignalOccDemandSignalsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]]

---


### DataOciDemandSignalOccDemandSignalsFilterOutputReference <a name="DataOciDemandSignalOccDemandSignalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDemandSignalOccDemandSignalsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>]

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values"></a>

```python
values: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected">time_expected</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comments`<sup>Required</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `time_expected`<sup>Required</sup> <a name="time_expected" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```python
time_expected: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId">occ_demand_signal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals">occ_demand_signals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations">patch_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `occ_demand_signal_id`<sup>Required</sup> <a name="occ_demand_signal_id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId"></a>

```python
occ_demand_signal_id: str
```

- *Type:* str

---

##### `occ_demand_signals`<sup>Required</sup> <a name="occ_demand_signals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals"></a>

```python
occ_demand_signals: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a>

---

##### `patch_operations`<sup>Required</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations"></a>

```python
patch_operations: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem">selected_item</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection">selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value">value</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `selected_item`<sup>Required</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```python
selection: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value"></a>

```python
value: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_demand_signal_occ_demand_signals

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items"></a>

```python
items: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a>

---



