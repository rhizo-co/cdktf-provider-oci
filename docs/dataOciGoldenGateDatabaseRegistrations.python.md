# `dataOciGoldenGateDatabaseRegistrations` Submodule <a name="`dataOciGoldenGateDatabaseRegistrations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDatabaseRegistrations <a name="DataOciGoldenGateDatabaseRegistrations" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations oci_golden_gate_database_registrations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations(
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
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDatabaseRegistrationsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#filter DataOciGoldenGateDatabaseRegistrations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDatabaseRegistrationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDatabaseRegistrations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGoldenGateDatabaseRegistrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGoldenGateDatabaseRegistrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGoldenGateDatabaseRegistrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDatabaseRegistrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.databaseRegistrationCollection">database_registration_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList">DataOciGoldenGateDatabaseRegistrationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_registration_collection`<sup>Required</sup> <a name="database_registration_collection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.databaseRegistrationCollection"></a>

```python
database_registration_collection: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filter"></a>

```python
filter: DataOciGoldenGateDatabaseRegistrationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList">DataOciGoldenGateDatabaseRegistrationsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciGoldenGateDatabaseRegistrationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDatabaseRegistrationsConfig <a name="DataOciGoldenGateDatabaseRegistrationsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDatabaseRegistrationsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDatabaseRegistrationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#filter DataOciGoldenGateDatabaseRegistrations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}.

---

### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection()
```


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems()
```


### DataOciGoldenGateDatabaseRegistrationsFilter <a name="DataOciGoldenGateDatabaseRegistrationsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#name DataOciGoldenGateDatabaseRegistrations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#values DataOciGoldenGateDatabaseRegistrations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#regex DataOciGoldenGateDatabaseRegistrations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#name DataOciGoldenGateDatabaseRegistrations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#values DataOciGoldenGateDatabaseRegistrations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#regex DataOciGoldenGateDatabaseRegistrations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.aliasName">alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.rcePrivateIp">rce_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretCompartmentId">secret_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.sessionMode">session_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.wallet">wallet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `rce_private_ip`<sup>Required</sup> <a name="rce_private_ip" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.rcePrivateIp"></a>

```python
rce_private_ip: str
```

- *Type:* str

---

##### `secret_compartment_id`<sup>Required</sup> <a name="secret_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretCompartmentId"></a>

```python
secret_compartment_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `session_mode`<sup>Required</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.wallet"></a>

```python
wallet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems</a>

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.items"></a>

```python
items: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection</a>

---


### DataOciGoldenGateDatabaseRegistrationsFilterList <a name="DataOciGoldenGateDatabaseRegistrationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDatabaseRegistrationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDatabaseRegistrationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]]

---


### DataOciGoldenGateDatabaseRegistrationsFilterOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_database_registrations

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciGoldenGateDatabaseRegistrationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>]

---



