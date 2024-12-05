# `dataOciSchServiceConnectors` Submodule <a name="`dataOciSchServiceConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSchServiceConnectors <a name="DataOciSchServiceConnectors" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors oci_sch_service_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectors(
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
  filter: typing.Union[IResolvable, typing.List[DataOciSchServiceConnectorsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#filter DataOciSchServiceConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciSchServiceConnectorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciSchServiceConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciSchServiceConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciSchServiceConnectors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciSchServiceConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSchServiceConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList">DataOciSchServiceConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.serviceConnectorCollection">service_connector_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList">DataOciSchServiceConnectorsServiceConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filter"></a>

```python
filter: DataOciSchServiceConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList">DataOciSchServiceConnectorsFilterList</a>

---

##### `service_connector_collection`<sup>Required</sup> <a name="service_connector_collection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.serviceConnectorCollection"></a>

```python
service_connector_collection: DataOciSchServiceConnectorsServiceConnectorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList">DataOciSchServiceConnectorsServiceConnectorCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciSchServiceConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSchServiceConnectorsConfig <a name="DataOciSchServiceConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciSchServiceConnectorsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciSchServiceConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#filter DataOciSchServiceConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}.

---

### DataOciSchServiceConnectorsFilter <a name="DataOciSchServiceConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#name DataOciSchServiceConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#values DataOciSchServiceConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#regex DataOciSchServiceConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#name DataOciSchServiceConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#values DataOciSchServiceConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#regex DataOciSchServiceConnectors#regex}.

---

### DataOciSchServiceConnectorsServiceConnectorCollection <a name="DataOciSchServiceConnectorsServiceConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItems <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue()
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSchServiceConnectorsFilterList <a name="DataOciSchServiceConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciSchServiceConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]]

---


### DataOciSchServiceConnectorsFilterOutputReference <a name="DataOciSchServiceConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciSchServiceConnectorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>]

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems">DataOciSchServiceConnectorsServiceConnectorCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.source"></a>

```python
source: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.target"></a>

```python
target: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.tasks"></a>

```python
tasks: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems">DataOciSchServiceConnectorsServiceConnectorCollectionItems</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```python
metrics: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```python
namespaces: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.namespaceDetails">namespace_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `namespace_details`<sup>Required</sup> <a name="namespace_details" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```python
namespace_details: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.configMap">config_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.logSources">log_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.monitoringSources">monitoring_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_map`<sup>Required</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.configMap"></a>

```python
config_map: str
```

- *Type:* str

---

##### `cursor`<sup>Required</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.cursor"></a>

```python
cursor: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `log_sources`<sup>Required</sup> <a name="log_sources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.logSources"></a>

```python
log_sources: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList</a>

---

##### `monitoring_sources`<sup>Required</sup> <a name="monitoring_sources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.monitoringSources"></a>

```python
monitoring_sources: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList</a>

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.dimensionValue">dimension_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_value`<sup>Required</sup> <a name="dimension_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.dimensionValue"></a>

```python
dimension_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverSizeInMbs">batch_rollover_size_in_mbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverTimeInMs">batch_rollover_time_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInNum">batch_size_in_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.enableFormattedMessaging">enable_formatted_messaging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logSourceIdentifier">log_source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.objectNamePrefix">object_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_rollover_size_in_mbs`<sup>Required</sup> <a name="batch_rollover_size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```python
batch_rollover_size_in_mbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_rollover_time_in_ms`<sup>Required</sup> <a name="batch_rollover_time_in_ms" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverTimeInMs"></a>

```python
batch_rollover_time_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_kbs`<sup>Required</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_num`<sup>Required</sup> <a name="batch_size_in_num" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInNum"></a>

```python
batch_size_in_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec`<sup>Required</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.dimensions"></a>

```python
dimensions: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList</a>

---

##### `enable_formatted_messaging`<sup>Required</sup> <a name="enable_formatted_messaging" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.enableFormattedMessaging"></a>

```python
enable_formatted_messaging: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_source_identifier`<sup>Required</sup> <a name="log_source_identifier" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logSourceIdentifier"></a>

```python
log_source_identifier: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_name_prefix`<sup>Required</sup> <a name="object_name_prefix" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.objectNamePrefix"></a>

```python
object_name_prefix: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_in_kbs`<sup>Required</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec`<sup>Required</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connectors

dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection">DataOciSchServiceConnectorsServiceConnectorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.items"></a>

```python
items: DataOciSchServiceConnectorsServiceConnectorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorsServiceConnectorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection">DataOciSchServiceConnectorsServiceConnectorCollection</a>

---



