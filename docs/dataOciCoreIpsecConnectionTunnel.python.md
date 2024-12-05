# `dataOciCoreIpsecConnectionTunnel` Submodule <a name="`dataOciCoreIpsecConnectionTunnel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnel <a name="DataOciCoreIpsecConnectionTunnel" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel oci_core_ipsec_connection_tunnel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel(
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
  tunnel_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.ipsecId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.tunnelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreIpsecConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits">associated_virtual_circuits</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo">bgp_session_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp">cpe_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig">dpd_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode">dpd_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec">dpd_timeout_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig">encryption_domain_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion">ike_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled">nat_translation_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate">oracle_can_initiate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails">phase_one_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails">phase_two_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing">routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret">shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated">time_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp">vpn_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput">ipsec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId">ipsec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `associated_virtual_circuits`<sup>Required</sup> <a name="associated_virtual_circuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits"></a>

```python
associated_virtual_circuits: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bgp_session_info`<sup>Required</sup> <a name="bgp_session_info" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo"></a>

```python
bgp_session_info: DataOciCoreIpsecConnectionTunnelBgpSessionInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpe_ip`<sup>Required</sup> <a name="cpe_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp"></a>

```python
cpe_ip: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dpd_config`<sup>Required</sup> <a name="dpd_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig"></a>

```python
dpd_config: DataOciCoreIpsecConnectionTunnelDpdConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a>

---

##### `dpd_mode`<sup>Required</sup> <a name="dpd_mode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode"></a>

```python
dpd_mode: str
```

- *Type:* str

---

##### `dpd_timeout_in_sec`<sup>Required</sup> <a name="dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec"></a>

```python
dpd_timeout_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_domain_config`<sup>Required</sup> <a name="encryption_domain_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig"></a>

```python
encryption_domain_config: DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ike_version`<sup>Required</sup> <a name="ike_version" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion"></a>

```python
ike_version: str
```

- *Type:* str

---

##### `nat_translation_enabled`<sup>Required</sup> <a name="nat_translation_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled"></a>

```python
nat_translation_enabled: str
```

- *Type:* str

---

##### `oracle_can_initiate`<sup>Required</sup> <a name="oracle_can_initiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate"></a>

```python
oracle_can_initiate: str
```

- *Type:* str

---

##### `phase_one_details`<sup>Required</sup> <a name="phase_one_details" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails"></a>

```python
phase_one_details: DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a>

---

##### `phase_two_details`<sup>Required</sup> <a name="phase_two_details" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails"></a>

```python
phase_two_details: DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing"></a>

```python
routing: str
```

- *Type:* str

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_status_updated`<sup>Required</sup> <a name="time_status_updated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated"></a>

```python
time_status_updated: str
```

- *Type:* str

---

##### `vpn_ip`<sup>Required</sup> <a name="vpn_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp"></a>

```python
vpn_ip: str
```

- *Type:* str

---

##### `ipsec_id_input`<sup>Optional</sup> <a name="ipsec_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput"></a>

```python
ipsec_id_input: str
```

- *Type:* str

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo()
```


### DataOciCoreIpsecConnectionTunnelConfig <a name="DataOciCoreIpsecConnectionTunnelConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  tunnel_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}.

---

### DataOciCoreIpsecConnectionTunnelDpdConfig <a name="DataOciCoreIpsecConnectionTunnelDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig()
```


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig()
```


### DataOciCoreIpsecConnectionTunnelPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails()
```


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State">bgp_ipv6_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState">bgp_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp">customer_interface_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6">customer_interface_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn">oracle_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp">oracle_interface_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">oracle_interface_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_ipv6_state`<sup>Required</sup> <a name="bgp_ipv6_state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```python
bgp_ipv6_state: str
```

- *Type:* str

---

##### `bgp_state`<sup>Required</sup> <a name="bgp_state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState"></a>

```python
bgp_state: str
```

- *Type:* str

---

##### `customer_bgp_asn`<sup>Required</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```python
customer_bgp_asn: str
```

- *Type:* str

---

##### `customer_interface_ip`<sup>Required</sup> <a name="customer_interface_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```python
customer_interface_ip: str
```

- *Type:* str

---

##### `customer_interface_ipv6`<sup>Required</sup> <a name="customer_interface_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```python
customer_interface_ipv6: str
```

- *Type:* str

---

##### `oracle_bgp_asn`<sup>Required</sup> <a name="oracle_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```python
oracle_bgp_asn: str
```

- *Type:* str

---

##### `oracle_interface_ip`<sup>Required</sup> <a name="oracle_interface_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```python
oracle_interface_ip: str
```

- *Type:* str

---

##### `oracle_interface_ipv6`<sup>Required</sup> <a name="oracle_interface_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```python
oracle_interface_ipv6: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode">dpd_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec">dpd_timeout_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dpd_mode`<sup>Required</sup> <a name="dpd_mode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode"></a>

```python
dpd_mode: str
```

- *Type:* str

---

##### `dpd_timeout_in_sec`<sup>Required</sup> <a name="dpd_timeout_in_sec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```python
dpd_timeout_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelDpdConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">cpe_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">oracle_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpe_traffic_selector`<sup>Required</sup> <a name="cpe_traffic_selector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```python
cpe_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oracle_traffic_selector`<sup>Required</sup> <a name="oracle_traffic_selector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```python
oracle_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup">custom_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">is_custom_phase_one_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished">is_ike_established</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiated_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup">negotiated_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiated_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime">remaining_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt">remaining_lifetime_int</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">remaining_lifetime_last_retrieved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_authentication_algorithm`<sup>Required</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

---

##### `custom_dh_group`<sup>Required</sup> <a name="custom_dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```python
custom_dh_group: str
```

- *Type:* str

---

##### `custom_encryption_algorithm`<sup>Required</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

---

##### `is_custom_phase_one_config`<sup>Required</sup> <a name="is_custom_phase_one_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```python
is_custom_phase_one_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ike_established`<sup>Required</sup> <a name="is_ike_established" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```python
is_ike_established: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negotiated_authentication_algorithm`<sup>Required</sup> <a name="negotiated_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```python
negotiated_authentication_algorithm: str
```

- *Type:* str

---

##### `negotiated_dh_group`<sup>Required</sup> <a name="negotiated_dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```python
negotiated_dh_group: str
```

- *Type:* str

---

##### `negotiated_encryption_algorithm`<sup>Required</sup> <a name="negotiated_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```python
negotiated_encryption_algorithm: str
```

- *Type:* str

---

##### `remaining_lifetime`<sup>Required</sup> <a name="remaining_lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```python
remaining_lifetime: str
```

- *Type:* str

---

##### `remaining_lifetime_int`<sup>Required</sup> <a name="remaining_lifetime_int" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```python
remaining_lifetime_int: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remaining_lifetime_last_retrieved`<sup>Required</sup> <a name="remaining_lifetime_last_retrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```python
remaining_lifetime_last_retrieved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">custom_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">custom_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">is_custom_phase_two_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished">is_esp_established</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled">is_pfs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiated_authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">negotiated_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiated_encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime">remaining_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">remaining_lifetime_int</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">remaining_lifetime_last_retrieved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_authentication_algorithm`<sup>Required</sup> <a name="custom_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```python
custom_authentication_algorithm: str
```

- *Type:* str

---

##### `custom_encryption_algorithm`<sup>Required</sup> <a name="custom_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```python
custom_encryption_algorithm: str
```

- *Type:* str

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `is_custom_phase_two_config`<sup>Required</sup> <a name="is_custom_phase_two_config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```python
is_custom_phase_two_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_esp_established`<sup>Required</sup> <a name="is_esp_established" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```python
is_esp_established: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pfs_enabled`<sup>Required</sup> <a name="is_pfs_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```python
is_pfs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negotiated_authentication_algorithm`<sup>Required</sup> <a name="negotiated_authentication_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```python
negotiated_authentication_algorithm: str
```

- *Type:* str

---

##### `negotiated_dh_group`<sup>Required</sup> <a name="negotiated_dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```python
negotiated_dh_group: str
```

- *Type:* str

---

##### `negotiated_encryption_algorithm`<sup>Required</sup> <a name="negotiated_encryption_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```python
negotiated_encryption_algorithm: str
```

- *Type:* str

---

##### `remaining_lifetime`<sup>Required</sup> <a name="remaining_lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```python
remaining_lifetime: str
```

- *Type:* str

---

##### `remaining_lifetime_int`<sup>Required</sup> <a name="remaining_lifetime_int" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```python
remaining_lifetime_int: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remaining_lifetime_last_retrieved`<sup>Required</sup> <a name="remaining_lifetime_last_retrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```python
remaining_lifetime_last_retrieved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a>

---



