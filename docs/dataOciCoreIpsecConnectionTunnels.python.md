# `dataOciCoreIpsecConnectionTunnels` Submodule <a name="`dataOciCoreIpsecConnectionTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels oci_core_ipsec_connection_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.ipsecId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#filter DataOciCoreIpsecConnectionTunnels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreIpsecConnectionTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels">ip_sec_connection_tunnels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput">ipsec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId">ipsec_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter"></a>

```python
filter: DataOciCoreIpsecConnectionTunnelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a>

---

##### `ip_sec_connection_tunnels`<sup>Required</sup> <a name="ip_sec_connection_tunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels"></a>

```python
ip_sec_connection_tunnels: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipsec_id_input`<sup>Optional</sup> <a name="ipsec_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput"></a>

```python
ipsec_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelsConfig <a name="DataOciCoreIpsecConnectionTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#filter DataOciCoreIpsecConnectionTunnels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecConnectionTunnelsFilter <a name="DataOciCoreIpsecConnectionTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}.

---

### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels()
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo()
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig()
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig()
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails()
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelsFilterList <a name="DataOciCoreIpsecConnectionTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]]

---


### DataOciCoreIpsecConnectionTunnelsFilterOutputReference <a name="DataOciCoreIpsecConnectionTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreIpsecConnectionTunnelsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>]

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State">bgp_ipv6_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState">bgp_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp">customer_interface_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6">customer_interface_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn">oracle_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp">oracle_interface_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">oracle_interface_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_ipv6_state`<sup>Required</sup> <a name="bgp_ipv6_state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```python
bgp_ipv6_state: str
```

- *Type:* str

---

##### `bgp_state`<sup>Required</sup> <a name="bgp_state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState"></a>

```python
bgp_state: str
```

- *Type:* str

---

##### `customer_bgp_asn`<sup>Required</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```python
customer_bgp_asn: str
```

- *Type:* str

---

##### `customer_interface_ip`<sup>Required</sup> <a name="customer_interface_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```python
customer_interface_ip: str
```

- *Type:* str

---

##### `customer_interface_ipv6`<sup>Required</sup> <a name="customer_interface_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```python
customer_interface_ipv6: str
```

- *Type:* str

---

##### `oracle_bgp_asn`<sup>Required</sup> <a name="oracle_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```python
oracle_bgp_asn: str
```

- *Type:* str

---

##### `oracle_interface_ip`<sup>Required</sup> <a name="oracle_interface_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```python
oracle_interface_ip: str
```

- *Type:* str

---

##### `oracle_interface_ipv6`<sup>Required</sup> <a name="oracle_interface_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```python
oracle_interface_ipv6: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode">dpd_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec">dpd_timeout_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dpd_mode`<sup>Required</sup> <a name="dpd_mode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode"></a>

```python
dpd_mode: str
```

- *Type:* str

---

##### `dpd_timeout_in_sec`<sup>Required</sup> <a name="dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```python
dpd_timeout_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">cpe_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">oracle_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpe_traffic_selector`<sup>Required</sup> <a name="cpe_traffic_selector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```python
cpe_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oracle_traffic_selector`<sup>Required</sup> <a name="oracle_traffic_selector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```python
oracle_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits">associated_virtual_circuits</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo">bgp_session_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp">cpe_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig">dpd_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode">dpd_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec">dpd_timeout_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig">encryption_domain_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion">ike_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId">ipsec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled">nat_translation_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate">oracle_can_initiate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails">phase_one_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails">phase_two_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing">routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret">shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated">time_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp">vpn_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_virtual_circuits`<sup>Required</sup> <a name="associated_virtual_circuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits"></a>

```python
associated_virtual_circuits: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bgp_session_info`<sup>Required</sup> <a name="bgp_session_info" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo"></a>

```python
bgp_session_info: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpe_ip`<sup>Required</sup> <a name="cpe_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp"></a>

```python
cpe_ip: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dpd_config`<sup>Required</sup> <a name="dpd_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig"></a>

```python
dpd_config: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a>

---

##### `dpd_mode`<sup>Required</sup> <a name="dpd_mode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode"></a>

```python
dpd_mode: str
```

- *Type:* str

---

##### `dpd_timeout_in_sec`<sup>Required</sup> <a name="dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec"></a>

```python
dpd_timeout_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_domain_config`<sup>Required</sup> <a name="encryption_domain_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig"></a>

```python
encryption_domain_config: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ike_version`<sup>Required</sup> <a name="ike_version" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion"></a>

```python
ike_version: str
```

- *Type:* str

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

---

##### `nat_translation_enabled`<sup>Required</sup> <a name="nat_translation_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled"></a>

```python
nat_translation_enabled: str
```

- *Type:* str

---

##### `oracle_can_initiate`<sup>Required</sup> <a name="oracle_can_initiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate"></a>

```python
oracle_can_initiate: str
```

- *Type:* str

---

##### `phase_one_details`<sup>Required</sup> <a name="phase_one_details" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails"></a>

```python
phase_one_details: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a>

---

##### `phase_two_details`<sup>Required</sup> <a name="phase_two_details" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails"></a>

```python
phase_two_details: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing"></a>

```python
routing: str
```

- *Type:* str

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_status_updated`<sup>Required</sup> <a name="time_status_updated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated"></a>

```python
time_status_updated: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `vpn_ip`<sup>Required</sup> <a name="vpn_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp"></a>

```python
vpn_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup">custom_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">is_custom_phase_one_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished">is_ike_established</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiated_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup">negotiated_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiated_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime">remaining_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt">remaining_lifetime_int</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">remaining_lifetime_last_retrieved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_authentication_algorithm`<sup>Required</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

---

##### `custom_dh_group`<sup>Required</sup> <a name="custom_dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```python
custom_dh_group: str
```

- *Type:* str

---

##### `custom_encryption_algorithm`<sup>Required</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

---

##### `is_custom_phase_one_config`<sup>Required</sup> <a name="is_custom_phase_one_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```python
is_custom_phase_one_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ike_established`<sup>Required</sup> <a name="is_ike_established" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```python
is_ike_established: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negotiated_authentication_algorithm`<sup>Required</sup> <a name="negotiated_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```python
negotiated_authentication_algorithm: str
```

- *Type:* str

---

##### `negotiated_dh_group`<sup>Required</sup> <a name="negotiated_dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```python
negotiated_dh_group: str
```

- *Type:* str

---

##### `negotiated_encryption_algorithm`<sup>Required</sup> <a name="negotiated_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```python
negotiated_encryption_algorithm: str
```

- *Type:* str

---

##### `remaining_lifetime`<sup>Required</sup> <a name="remaining_lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```python
remaining_lifetime: str
```

- *Type:* str

---

##### `remaining_lifetime_int`<sup>Required</sup> <a name="remaining_lifetime_int" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```python
remaining_lifetime_int: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remaining_lifetime_last_retrieved`<sup>Required</sup> <a name="remaining_lifetime_last_retrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```python
remaining_lifetime_last_retrieved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnels

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">is_custom_phase_two_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished">is_esp_established</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled">is_pfs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiated_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">negotiated_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiated_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime">remaining_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">remaining_lifetime_int</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">remaining_lifetime_last_retrieved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_authentication_algorithm`<sup>Required</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

---

##### `custom_encryption_algorithm`<sup>Required</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `is_custom_phase_two_config`<sup>Required</sup> <a name="is_custom_phase_two_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```python
is_custom_phase_two_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_esp_established`<sup>Required</sup> <a name="is_esp_established" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```python
is_esp_established: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pfs_enabled`<sup>Required</sup> <a name="is_pfs_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```python
is_pfs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negotiated_authentication_algorithm`<sup>Required</sup> <a name="negotiated_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```python
negotiated_authentication_algorithm: str
```

- *Type:* str

---

##### `negotiated_dh_group`<sup>Required</sup> <a name="negotiated_dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```python
negotiated_dh_group: str
```

- *Type:* str

---

##### `negotiated_encryption_algorithm`<sup>Required</sup> <a name="negotiated_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```python
negotiated_encryption_algorithm: str
```

- *Type:* str

---

##### `remaining_lifetime`<sup>Required</sup> <a name="remaining_lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```python
remaining_lifetime: str
```

- *Type:* str

---

##### `remaining_lifetime_int`<sup>Required</sup> <a name="remaining_lifetime_int" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```python
remaining_lifetime_int: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remaining_lifetime_last_retrieved`<sup>Required</sup> <a name="remaining_lifetime_last_retrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```python
remaining_lifetime_last_retrieved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a>

---



